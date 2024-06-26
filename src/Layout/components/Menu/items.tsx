import { Path } from '@/enum/path.ts'
import {
  ApartmentOutlined,
  ApiOutlined,
  BankOutlined,
  BuildOutlined,
  ColumnWidthOutlined,
  HeatMapOutlined,
  SwapOutlined,
  TeamOutlined,
  ToolOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  VerticalAlignBottomOutlined,
  HomeOutlined,
  DingtalkOutlined,
  LockOutlined,
  HourglassOutlined,
  MailOutlined,
  FieldNumberOutlined,
  ClusterOutlined, SaveOutlined, EyeOutlined, PlayCircleOutlined
} from '@ant-design/icons'
import { MenuProps } from 'antd'


type MenuItem = Required<MenuProps>['items'][number]

export const MENU_ITEMS: MenuItem[] = [
  {
    key: Path.Creational,
    icon: <VerticalAlignBottomOutlined />,
    label: 'Пораждающие',
    children: [
      {
        key: Path.FactoryMethod,
        icon: <ToolOutlined />,
        label: 'Фабричный метод'
      },
      {
        key: Path.AbstractFactory,
        icon: <BankOutlined />,
        label: 'Абстрактная фабрика'
      },
      {
        key: Path.Prototype,
        icon: <TeamOutlined />,
        label: 'Прототип'
      },
      {
        key: Path.PrototypeRegistry,
        icon: <UsergroupAddOutlined />,
        label: 'Прототип (хранилище)'
      },
      {
        key: Path.Singleton,
        icon: <UserOutlined />,
        label: 'Одиночка'
      },
      {
        key: Path.Builder,
        icon: <BuildOutlined />,
        label: 'Строитель'
      }
    ]
  },
  {
    key: Path.Structure,
    icon: <ApartmentOutlined />,
    label: 'Структурные',
    children: [
      {
        key: Path.AdapterFC,
        icon: <ApiOutlined />,
        label: 'Адаптер FC'
      },
      {
        key: Path.AdapterClassic,
        icon: <ApiOutlined />,
        label: 'Адаптер Classic'
      },
      {
        key: Path.BridgeFC,
        icon: <ColumnWidthOutlined />,
        label: 'Мост FC'
      },
      {
        key: Path.BridgeClassic,
        icon: <ColumnWidthOutlined />,
        label: 'Мост Classic'
      },
      {
        key: Path.CompositeFC,
        icon: <ApartmentOutlined />,
        label: 'Компоновщик FC'
      },
      {
        key: Path.CompositeClassic,
        icon: <ApartmentOutlined />,
        label: 'Компоновщик Classic'
      },
      {
        key: Path.Decorator,
        icon: <HeatMapOutlined />,
        label: 'Декоратор'
      },
      {
        key: Path.Facade,
        icon: <HomeOutlined />,
        label: 'Фасад'
      },
      {
        key: Path.Flyweight,
        icon: <DingtalkOutlined />,
        label: 'Легковес'
      },
      {
        key: Path.Proxy,
        icon: <LockOutlined />,
        label: 'Заместитель'
      }
    ]
  },
  {
    key: Path.Behavior,
    icon: <SwapOutlined />,
    label: 'Поведенческие',
    children: [
      {
        key: Path.ChainsOfResponsibility,
        icon: (
          <div style={{ transform: 'rotate(90deg)' }}>
            <HourglassOutlined />
          </div>
        ),
        label: 'Цепочка обязанностей'
      },
      {
        key: Path.Command,
        icon: <MailOutlined />,
        label: 'Команда'
      },
      {
        key: Path.Iterator,
        icon: <FieldNumberOutlined />,
        label: 'Итератор'
      },
      {
        key: Path.Mediator,
        icon: <ClusterOutlined />,
        label: 'Посредник'
      },
      {
        key: Path.Memento,
        icon: <SaveOutlined />,
        label: 'Снимок'
      },
      {
        key: Path.MementoClassic,
        icon:
          <div style={{ transform: 'rotateY(180deg)' }}>
            <SaveOutlined />
          </div>,
        label: 'Снимок Classic'
      },
      {
        key: Path.Observer,
        icon: <EyeOutlined />,
        label: 'Наблюдатель'
      },
      {
        key: Path.State,
        icon: <PlayCircleOutlined />,
        label: 'Состояние'
      }
    ]
  }
]
